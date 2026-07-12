/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "1-cup",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2709760",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
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
    }
  ],
  "name": "Soup, tomato, canned / carton, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 7.67,
    "energy_kcal": 35.0,
    "fat_g": 0.33,
    "fibre_g": 0.6,
    "folate_ug": 4.0,
    "iron_mg": 0.44,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 113.0,
    "protein_g": 0.64,
    "salt_g": 0.4775,
    "sat_fat_g": 0.051,
    "sodium_mg": 191.0,
    "sugar_g": 4.17,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709760",
  "state": "Canned",
  "subcategory": "Soups, broth-based",
  "tags": [
    "canned",
    "soups",
    "soups-broth-based"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
