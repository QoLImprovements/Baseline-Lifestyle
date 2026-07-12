/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "quantity-not-specified",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2707667",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 6.5,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 153.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    }
  ],
  "name": "Roll, sweet, cinnamon bun, no frosting",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 50.9,
    "energy_kcal": 372.0,
    "fat_g": 16.4,
    "fibre_g": 2.4,
    "folate_ug": 72.0,
    "iron_mg": 1.6,
    "magnesium_mg": 17.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 76.0,
    "potassium_mg": 111.0,
    "protein_g": 6.2,
    "salt_g": 0.76,
    "sat_fat_g": 3.08,
    "sodium_mg": 304.0,
    "sugar_g": 31.7,
    "vitamin_a_ug": 62.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.99,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707667",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
