/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "medium-3-1-4-in-x-3-5-8-in-5-8-in-thick",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170092",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "medium-3-1-4-in-x-3-5-8-in-5-8-in-thick",
      "kind": "unit",
      "label": "medium 3-1/4 in. x 3-5/8 in., 5/8 in. thick."
    },
    {
      "gramsPerUnit": 22.0,
      "key": "small-2-3-4-in-dia-5-8-in-thick",
      "kind": "unit",
      "label": "small 2-3/4 in. dia., 5/8 in. thick."
    }
  ],
  "name": "Potato pancakes",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 27.8,
    "energy_kcal": 268.0,
    "fat_g": 14.8,
    "fibre_g": 3.3,
    "folate_ug": 41.0,
    "iron_mg": 1.67,
    "magnesium_mg": 36.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 128.0,
    "potassium_mg": 622.0,
    "protein_g": 6.08,
    "salt_g": 1.91,
    "sat_fat_g": 2.5,
    "sodium_mg": 764.0,
    "sugar_g": 1.79,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 27.6,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170092",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "unspecified",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
