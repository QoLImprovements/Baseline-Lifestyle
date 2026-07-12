/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-4-86-large-eggs",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171287",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "cup-4-86-large-eggs",
      "kind": "unit",
      "label": "cup (4.86 large eggs)"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "extra-large",
      "kind": "unit",
      "label": "extra large"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "jumbo",
      "kind": "unit",
      "label": "jumbo"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    }
  ],
  "name": "Egg, whole, raw, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 0.72,
    "energy_kcal": 143.0,
    "fat_g": 9.51,
    "fibre_g": 0.0,
    "folate_ug": 47.0,
    "iron_mg": 1.75,
    "magnesium_mg": 12.0,
    "omega3_g": 0.101,
    "phosphorus_mg": 198.0,
    "potassium_mg": 138.0,
    "protein_g": 12.6,
    "salt_g": 0.355,
    "sat_fat_g": 3.13,
    "sodium_mg": 142.0,
    "sugar_g": 0.37,
    "vitamin_a_ug": 160.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.05,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171287",
  "state": "Raw",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
