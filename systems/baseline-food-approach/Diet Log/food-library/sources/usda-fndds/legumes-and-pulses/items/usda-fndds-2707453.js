/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cup",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2707453",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Soup, bean",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 11.6,
    "energy_kcal": 67.0,
    "fat_g": 0.76,
    "fibre_g": 4.0,
    "folate_ug": 65.0,
    "iron_mg": 0.87,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 197.0,
    "protein_g": 3.76,
    "salt_g": 0.61,
    "sat_fat_g": 0.132,
    "sodium_mg": 244.0,
    "sugar_g": 1.14,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707453",
  "state": "Unspecified",
  "subcategory": "Soups, broth-based",
  "tags": [
    "legumes-and-pulses",
    "soups-broth-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
