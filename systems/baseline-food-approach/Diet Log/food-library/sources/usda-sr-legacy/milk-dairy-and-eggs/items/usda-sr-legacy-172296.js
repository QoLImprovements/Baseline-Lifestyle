/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172296",
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
  "name": "Babyfood, cereal, barley, prepared with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 162.0,
    "carbs_g": 9.94,
    "energy_kcal": 84.0,
    "fat_g": 3.26,
    "fibre_g": 0.6,
    "folate_ug": 7.0,
    "iron_mg": 3.49,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 151.0,
    "protein_g": 3.73,
    "salt_g": 0.1075,
    "sat_fat_g": 1.76,
    "sodium_mg": 43.0,
    "sugar_g": 5.1,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172296",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
