/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174999",
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
      "gramsPerUnit": 22.0,
      "key": "hush-puppy",
      "kind": "unit",
      "label": "hush puppy"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Hush puppies, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 278.0,
    "carbs_g": 46.0,
    "energy_kcal": 1410.0,
    "fat_g": 13.5,
    "fibre_g": 2.8,
    "folate_ug": 89.0,
    "iron_mg": 3.04,
    "magnesium_mg": 24.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 189.0,
    "potassium_mg": 144.0,
    "protein_g": 7.7,
    "salt_g": 1.67,
    "sat_fat_g": 2.11,
    "sodium_mg": 668.0,
    "sugar_g": 2.03,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.26,
    "vitamin_k_ug": 23.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174999",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
