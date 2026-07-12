/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "small",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169380",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "cup-chopped-or-diced",
      "kind": "unit",
      "label": "cup, chopped or diced"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    }
  ],
  "name": "Pickles, cucumber, sweet, low sodium (includes bread and butter pickles)",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 33.7,
    "energy_kcal": 511.0,
    "fat_g": 0.26,
    "fibre_g": 1.1,
    "folate_ug": 1.0,
    "iron_mg": 0.59,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 32.0,
    "protein_g": 0.37,
    "salt_g": 0.045,
    "sat_fat_g": 0.067,
    "sodium_mg": 18.0,
    "sugar_g": 26.7,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 76.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169380",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "grains-bread-and-pasta",
    "unspecified",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
