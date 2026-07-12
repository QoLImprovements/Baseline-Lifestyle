/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "oz",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-174301",
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
    }
  ],
  "name": "Soy protein concentrate, produced by acid wash",
  "nutritionPerBasis": {
    "calcium_mg": 363.0,
    "carbs_g": 25.4,
    "energy_kcal": 1370.0,
    "fat_g": 0.46,
    "fibre_g": 5.5,
    "folate_ug": 340.0,
    "iron_mg": 10.8,
    "magnesium_mg": 140.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 839.0,
    "potassium_mg": 450.0,
    "protein_g": 63.6,
    "salt_g": 2.25,
    "sat_fat_g": 0.052,
    "sodium_mg": 900.0,
    "sugar_g": 20.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174301",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "soy-and-plant-proteins",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
