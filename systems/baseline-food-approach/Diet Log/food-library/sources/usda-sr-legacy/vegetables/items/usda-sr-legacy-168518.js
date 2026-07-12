/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "slice",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168518",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.8,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "can-303-x-406",
      "kind": "unit",
      "label": "can (303 x 406)"
    },
    {
      "gramsPerUnit": 228.0,
      "key": "cup-mashed",
      "kind": "unit",
      "label": "cup, mashed"
    },
    {
      "gramsPerUnit": 146.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    }
  ],
  "name": "Carrots, canned, no salt added, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 5.54,
    "energy_kcal": 105.0,
    "fat_g": 0.19,
    "fibre_g": 1.5,
    "folate_ug": 9.0,
    "iron_mg": 0.64,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 179.0,
    "protein_g": 0.64,
    "salt_g": 0.105,
    "sat_fat_g": 0.036,
    "sodium_mg": 42.0,
    "sugar_g": 2.48,
    "vitamin_a_ug": 558.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 9.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168518",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
