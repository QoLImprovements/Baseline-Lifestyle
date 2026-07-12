/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-can",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2707459",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 440.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    }
  ],
  "name": "Soup, split pea",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 10.6,
    "energy_kcal": 61.0,
    "fat_g": 0.7,
    "fibre_g": 3.8,
    "folate_ug": 32.0,
    "iron_mg": 0.55,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 200.0,
    "protein_g": 3.55,
    "salt_g": 0.61,
    "sat_fat_g": 0.098,
    "sodium_mg": 244.0,
    "sugar_g": 2.16,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707459",
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
