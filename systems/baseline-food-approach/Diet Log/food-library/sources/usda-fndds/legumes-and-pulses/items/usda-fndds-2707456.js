/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-individual-container",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2707456",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 440.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    },
    {
      "gramsPerUnit": 525.0,
      "key": "1-can",
      "kind": "unit",
      "label": "1 can"
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
  "name": "Soup, bean, canned, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 8.12,
    "energy_kcal": 47.0,
    "fat_g": 0.68,
    "fibre_g": 2.7,
    "folate_ug": 43.0,
    "iron_mg": 0.56,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 145.0,
    "protein_g": 2.45,
    "salt_g": 0.4675,
    "sat_fat_g": 0.112,
    "sodium_mg": 187.0,
    "sugar_g": 1.09,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707456",
  "state": "Canned",
  "subcategory": "Soups, broth-based",
  "tags": [
    "canned",
    "legumes-and-pulses",
    "soups-broth-based"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
