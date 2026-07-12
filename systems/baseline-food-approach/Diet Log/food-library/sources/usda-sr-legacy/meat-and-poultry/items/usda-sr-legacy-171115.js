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
  "id": "usda-sr-legacy-171115",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 96.0,
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
  "name": "Chicken, wing, frozen, glazed, barbecue flavored, heated (conventional oven)",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 3.36,
    "energy_kcal": 1010.0,
    "fat_g": 14.9,
    "fibre_g": 0.5,
    "folate_ug": 10.0,
    "iron_mg": 1.97,
    "magnesium_mg": 21.0,
    "omega3_g": 0.038,
    "phosphorus_mg": 233.0,
    "potassium_mg": 218.0,
    "protein_g": 22.2,
    "salt_g": 1.3975,
    "sat_fat_g": 3.97,
    "sodium_mg": 559.0,
    "sugar_g": 1.94,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171115",
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
