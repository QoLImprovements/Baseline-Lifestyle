/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "pat-1-sq-1-3-high",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173430",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "pat-1-sq-1-3-high",
      "kind": "unit",
      "label": "pat (1\" sq, 1/3\" high)"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "stick",
      "kind": "unit",
      "label": "stick"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Butter, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 0.06,
    "energy_kcal": 717.0,
    "fat_g": 81.1,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.02,
    "magnesium_mg": 2.0,
    "omega3_g": 0.315,
    "phosphorus_mg": 24.0,
    "potassium_mg": 24.0,
    "protein_g": 0.85,
    "salt_g": 0.0275,
    "sat_fat_g": 50.5,
    "sodium_mg": 11.0,
    "sugar_g": 0.06,
    "vitamin_a_ug": 684.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.32,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173430",
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
