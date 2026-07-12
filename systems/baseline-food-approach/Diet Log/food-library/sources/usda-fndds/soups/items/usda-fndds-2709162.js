/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "quantity-not-specified",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2709162",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 525.0,
      "key": "1-can",
      "kind": "unit",
      "label": "1 can"
    },
    {
      "gramsPerUnit": 440.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Soup, tortilla",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 12.6,
    "energy_kcal": 102.0,
    "fat_g": 4.17,
    "fibre_g": 1.3,
    "folate_ug": 9.0,
    "iron_mg": 0.39,
    "magnesium_mg": 21.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 67.0,
    "potassium_mg": 129.0,
    "protein_g": 4.22,
    "salt_g": 0.6425,
    "sat_fat_g": 0.679,
    "sodium_mg": 257.0,
    "sugar_g": 0.87,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 10.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709162",
  "state": "Unspecified",
  "subcategory": "Soups, broth-based",
  "tags": [
    "soups",
    "soups-broth-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
