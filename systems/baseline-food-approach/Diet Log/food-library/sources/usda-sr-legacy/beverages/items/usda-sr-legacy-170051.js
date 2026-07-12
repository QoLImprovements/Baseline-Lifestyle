/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170051",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 111.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 164.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Tomatoes, red, ripe, canned, packed in tomato juice",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 3.47,
    "energy_kcal": 16.0,
    "fat_g": 0.25,
    "fibre_g": 1.9,
    "folate_ug": 8.0,
    "iron_mg": 0.57,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 191.0,
    "protein_g": 0.79,
    "salt_g": 0.2875,
    "sat_fat_g": 0.034,
    "sodium_mg": 115.0,
    "sugar_g": 2.55,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 12.6,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170051",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "beverages",
    "canned",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
