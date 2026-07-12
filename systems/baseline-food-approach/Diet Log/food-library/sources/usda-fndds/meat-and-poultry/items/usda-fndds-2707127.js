/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2707127",
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
      "gramsPerUnit": 525.0,
      "key": "1-can",
      "kind": "unit",
      "label": "1 can"
    }
  ],
  "name": "Soup, beef, canned",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 4.86,
    "energy_kcal": 37.0,
    "fat_g": 1.17,
    "fibre_g": 0.9,
    "folate_ug": 9.0,
    "iron_mg": 0.25,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 161.0,
    "protein_g": 1.94,
    "salt_g": 0.665,
    "sat_fat_g": 0.366,
    "sodium_mg": 266.0,
    "sugar_g": 1.23,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 5.2,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707127",
  "state": "Canned",
  "subcategory": "Soups, broth-based",
  "tags": [
    "canned",
    "meat-and-poultry",
    "soups-broth-based"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
