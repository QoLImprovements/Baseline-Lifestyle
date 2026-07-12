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
  "id": "usda-sr-legacy-171127",
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
      "gramsPerUnit": 95.0,
      "key": "thigh",
      "kind": "unit",
      "label": "thigh"
    }
  ],
  "name": "Chicken, broiler, rotisserie, BBQ, thigh, meat and skin",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.12,
    "energy_kcal": 946.0,
    "fat_g": 15.1,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.95,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 218.0,
    "potassium_mg": 255.0,
    "protein_g": 22.5,
    "salt_g": 0.8375,
    "sat_fat_g": 3.93,
    "sodium_mg": 335.0,
    "sugar_g": 0.12,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171127",
  "state": "Unspecified",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
