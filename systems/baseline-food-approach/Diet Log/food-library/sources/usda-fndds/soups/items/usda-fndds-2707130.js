/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "1-individual-container",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2707130",
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
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Soup, Italian wedding",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 7.38,
    "energy_kcal": 66.0,
    "fat_g": 2.4,
    "fibre_g": 0.9,
    "folate_ug": 32.0,
    "iron_mg": 0.68,
    "magnesium_mg": 23.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 36.0,
    "potassium_mg": 138.0,
    "protein_g": 3.57,
    "salt_g": 0.5975,
    "sat_fat_g": 0.804,
    "sodium_mg": 239.0,
    "sugar_g": 0.69,
    "vitamin_a_ug": 72.0,
    "vitamin_c_mg": 4.3,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 86.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707130",
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
