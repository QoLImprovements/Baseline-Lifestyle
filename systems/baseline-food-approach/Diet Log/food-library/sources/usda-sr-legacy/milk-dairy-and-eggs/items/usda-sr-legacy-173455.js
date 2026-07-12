/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "slice-3-4-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173455",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "slice-3-4-oz",
      "kind": "unit",
      "label": "slice 3/4 oz"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "slice-2-3-oz",
      "kind": "unit",
      "label": "slice 2/3 oz"
    }
  ],
  "name": "Cheese product, pasteurized process, American, reduced fat, fortified with vitamin D",
  "nutritionPerBasis": {
    "calcium_mg": 529.0,
    "carbs_g": 10.6,
    "energy_kcal": 240.0,
    "fat_g": 14.1,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.2,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 829.0,
    "potassium_mg": 330.0,
    "protein_g": 17.6,
    "salt_g": 3.0,
    "sat_fat_g": 8.85,
    "sodium_mg": 1200.0,
    "sugar_g": 8.02,
    "vitamin_a_ug": 250.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173455",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
