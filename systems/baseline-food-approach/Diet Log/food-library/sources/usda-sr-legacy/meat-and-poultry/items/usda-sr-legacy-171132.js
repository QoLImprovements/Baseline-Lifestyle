/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171132",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 518.0,
      "key": "wing",
      "kind": "unit",
      "label": "wing"
    }
  ],
  "name": "Turkey, retail parts, wing, meat and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.05,
    "energy_kcal": 846.0,
    "fat_g": 13.8,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.68,
    "magnesium_mg": 17.0,
    "omega3_g": 0.224,
    "phosphorus_mg": 139.0,
    "potassium_mg": 192.0,
    "protein_g": 19.5,
    "salt_g": 0.1675,
    "sat_fat_g": 3.55,
    "sodium_mg": 67.0,
    "sugar_g": 0.03,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171132",
  "state": "Raw",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
