/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "biscuit",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173266",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "biscuit",
      "kind": "unit",
      "label": "biscuit"
    }
  ],
  "name": "Fast foods, biscuit, with egg and bacon",
  "nutritionPerBasis": {
    "calcium_mg": 126.0,
    "carbs_g": 19.1,
    "energy_kcal": 305.0,
    "fat_g": 20.7,
    "fibre_g": 0.5,
    "folate_ug": 40.0,
    "iron_mg": 2.49,
    "magnesium_mg": 16.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 159.0,
    "potassium_mg": 167.0,
    "protein_g": 11.3,
    "salt_g": 2.11,
    "sat_fat_g": 5.3,
    "sodium_mg": 844.0,
    "sugar_g": 2.19,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 1.34,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173266",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
