/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173411",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 9.4,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 3.8,
      "key": "pat-1-sq-1-3-high",
      "kind": "unit",
      "label": "pat (1\" sq, 1/3\" high)"
    },
    {
      "gramsPerUnit": 76.0,
      "key": "stick",
      "kind": "unit",
      "label": "stick"
    }
  ],
  "name": "Butter, whipped, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 0.0,
    "energy_kcal": 731.0,
    "fat_g": 78.3,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.05,
    "magnesium_mg": 1.0,
    "omega3_g": 0.355,
    "phosphorus_mg": 24.0,
    "potassium_mg": 41.0,
    "protein_g": 0.49,
    "salt_g": 1.4575,
    "sat_fat_g": 45.4,
    "sodium_mg": 583.0,
    "sugar_g": 0.06,
    "vitamin_a_ug": 683.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.37,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173411",
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
