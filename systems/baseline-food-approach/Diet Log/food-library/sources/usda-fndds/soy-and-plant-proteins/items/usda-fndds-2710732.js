/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "quantity-not-specified",
  "description": "Protein and nutritional powders",
  "id": "usda-fndds-2710732",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "1-scoop-eas-whey",
      "kind": "unit",
      "label": "1 scoop EAS Whey"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Nutritional powder mix (EAS Soy Protein Powder)",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 43.9,
    "energy_kcal": 405.0,
    "fat_g": 3.57,
    "fibre_g": 0.0,
    "folate_ug": 100.0,
    "iron_mg": 6.43,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 441.0,
    "potassium_mg": 714.0,
    "protein_g": 47.6,
    "salt_g": 1.13,
    "sat_fat_g": 0.0,
    "sodium_mg": 452.0,
    "sugar_g": 40.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710732",
  "state": "Unspecified",
  "subcategory": "Protein and nutritional powders",
  "tags": [
    "protein-and-nutritional-powders",
    "soy-and-plant-proteins",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
