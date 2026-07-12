/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171508",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 74.0,
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
  "name": "Chicken, wing, frozen, glazed, barbecue flavored, heated (microwave)",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 3.84,
    "energy_kcal": 1040.0,
    "fat_g": 13.9,
    "fibre_g": 0.9,
    "folate_ug": 12.0,
    "iron_mg": 2.74,
    "magnesium_mg": 27.0,
    "omega3_g": 0.047,
    "phosphorus_mg": 272.0,
    "potassium_mg": 254.0,
    "protein_g": 25.3,
    "salt_g": 2.0925,
    "sat_fat_g": 3.66,
    "sodium_mg": 837.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171508",
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
