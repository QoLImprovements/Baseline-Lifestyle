/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-medium-ice-cream-cup",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705633",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-medium-ice-cream-cup",
      "kind": "unit",
      "label": "1 medium ice cream cup"
    },
    {
      "gramsPerUnit": 375.0,
      "key": "1-large-ice-cream-cup",
      "kind": "unit",
      "label": "1 large ice cream cup"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-small-ice-cream-cup",
      "kind": "unit",
      "label": "1 small ice cream cup"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-scoop",
      "kind": "unit",
      "label": "1 scoop"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    }
  ],
  "name": "Ice cream, chocolate, with additional ingredients",
  "nutritionPerBasis": {
    "calcium_mg": 102.0,
    "carbs_g": 34.4,
    "energy_kcal": 249.0,
    "fat_g": 11.8,
    "fibre_g": 1.5,
    "folate_ug": 16.0,
    "iron_mg": 1.32,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 251.0,
    "protein_g": 3.93,
    "salt_g": 0.255,
    "sat_fat_g": 6.98,
    "sodium_mg": 102.0,
    "sugar_g": 28.8,
    "vitamin_a_ug": 103.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705633",
  "state": "Unspecified",
  "subcategory": "Ice cream and frozen dairy desserts",
  "tags": [
    "ice-cream-and-frozen-dairy-desserts",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
