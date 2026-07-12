/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "nlea-serving",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170093",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 299.0,
      "key": "potato-large",
      "kind": "unit",
      "label": "potato large"
    },
    {
      "gramsPerUnit": 173.0,
      "key": "potato-medium",
      "kind": "unit",
      "label": "potato medium"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "potato-small",
      "kind": "unit",
      "label": "potato small"
    }
  ],
  "name": "Potatoes, baked, flesh and skin, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 21.2,
    "energy_kcal": 390.0,
    "fat_g": 0.13,
    "fibre_g": 2.2,
    "folate_ug": 28.0,
    "iron_mg": 1.08,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 70.0,
    "potassium_mg": 535.0,
    "protein_g": 2.5,
    "salt_g": 0.025,
    "sat_fat_g": 0.034,
    "sodium_mg": 10.0,
    "sugar_g": 1.18,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 9.6,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170093",
  "state": "Baked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "baked",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
