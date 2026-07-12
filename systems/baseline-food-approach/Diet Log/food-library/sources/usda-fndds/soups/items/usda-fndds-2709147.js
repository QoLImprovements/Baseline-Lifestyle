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
  "id": "usda-fndds-2709147",
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
    }
  ],
  "name": "Soup, barley",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 6.66,
    "energy_kcal": 58.0,
    "fat_g": 2.07,
    "fibre_g": 1.1,
    "folate_ug": 10.0,
    "iron_mg": 0.53,
    "magnesium_mg": 11.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 39.0,
    "potassium_mg": 117.0,
    "protein_g": 3.34,
    "salt_g": 0.6175,
    "sat_fat_g": 0.7,
    "sodium_mg": 247.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 7.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709147",
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
