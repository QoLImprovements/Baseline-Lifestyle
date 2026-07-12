/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving-1-biscuit",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174904",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "serving-1-biscuit",
      "kind": "unit",
      "label": "serving 1 biscuit"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Biscuits, plain or buttermilk, refrigerated dough, lower fat",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 43.7,
    "energy_kcal": 270.0,
    "fat_g": 7.83,
    "fibre_g": 2.0,
    "folate_ug": 85.0,
    "iron_mg": 2.13,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 400.0,
    "potassium_mg": 159.0,
    "protein_g": 6.7,
    "salt_g": 2.07,
    "sat_fat_g": 3.14,
    "sodium_mg": 828.0,
    "sugar_g": 7.18,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174904",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
