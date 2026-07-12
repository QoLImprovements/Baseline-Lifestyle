/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "bunch",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170379",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 608.0,
      "key": "bunch",
      "kind": "unit",
      "label": "bunch"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "0-5-cup-chopped-or-diced",
      "kind": "unit",
      "label": "0.5 cup, chopped or diced"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "stalk",
      "kind": "unit",
      "label": "stalk"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "spear-about-5-long",
      "kind": "unit",
      "label": "spear (about 5\" long)"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup chopped"
    }
  ],
  "name": "Broccoli, raw",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 6.64,
    "energy_kcal": 141.0,
    "fat_g": 0.37,
    "fibre_g": 2.6,
    "folate_ug": 63.0,
    "iron_mg": 0.73,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 316.0,
    "protein_g": 2.82,
    "salt_g": 0.0825,
    "sat_fat_g": 0.114,
    "sodium_mg": 33.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 89.2,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 102.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170379",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
