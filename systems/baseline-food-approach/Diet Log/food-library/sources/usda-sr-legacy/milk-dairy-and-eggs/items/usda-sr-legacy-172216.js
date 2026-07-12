/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172216",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    }
  ],
  "name": "Cheese, Mexican, blend, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 1150.0,
    "carbs_g": 3.41,
    "energy_kcal": 1180.0,
    "fat_g": 19.4,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 0.13,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 583.0,
    "potassium_mg": 93.0,
    "protein_g": 24.7,
    "salt_g": 1.94,
    "sat_fat_g": 11.6,
    "sodium_mg": 776.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 155.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172216",
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
