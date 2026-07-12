/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "tbsp",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-168125",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Babyfood, dinner, macaroni, beef and tomato sauce, toddler",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 11.5,
    "energy_kcal": 343.0,
    "fat_g": 1.9,
    "fibre_g": 1.1,
    "folate_ug": 10.0,
    "iron_mg": 0.8,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 148.0,
    "protein_g": 4.34,
    "salt_g": 0.0875,
    "sat_fat_g": 0.705,
    "sodium_mg": 35.0,
    "sugar_g": 0.37,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168125",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
