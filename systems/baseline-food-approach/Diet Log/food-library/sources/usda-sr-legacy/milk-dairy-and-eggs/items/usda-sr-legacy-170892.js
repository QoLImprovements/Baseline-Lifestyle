/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "can",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170892",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    }
  ],
  "name": "Nutritional supplement for people with diabetes, liquid",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 11.9,
    "energy_kcal": 368.0,
    "fat_g": 3.08,
    "fibre_g": 2.2,
    "folate_ug": 44.0,
    "iron_mg": 1.98,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 176.0,
    "protein_g": 4.4,
    "salt_g": 0.23,
    "sat_fat_g": 0.232,
    "sodium_mg": 92.0,
    "sugar_g": 2.64,
    "vitamin_a_ug": 165.0,
    "vitamin_c_mg": 26.4,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 8.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170892",
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
