/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171111",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, wing, frozen, glazed, barbecue flavored",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 3.34,
    "energy_kcal": 211.0,
    "fat_g": 12.7,
    "fibre_g": 0.6,
    "folate_ug": 10.0,
    "iron_mg": 2.41,
    "magnesium_mg": 20.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 205.0,
    "potassium_mg": 190.0,
    "protein_g": 19.7,
    "salt_g": 1.5375,
    "sat_fat_g": 3.32,
    "sodium_mg": 615.0,
    "sugar_g": 2.04,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171111",
  "state": "Frozen",
  "subcategory": "Poultry Products",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
