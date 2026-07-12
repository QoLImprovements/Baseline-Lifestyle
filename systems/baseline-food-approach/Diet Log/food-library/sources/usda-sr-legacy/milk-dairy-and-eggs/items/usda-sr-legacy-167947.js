/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-167947",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Candies, TOBLERONE, milk chocolate with honey and almond nougat",
  "nutritionPerBasis": {
    "calcium_mg": 126.0,
    "carbs_g": 61.2,
    "energy_kcal": 489.0,
    "fat_g": 28.6,
    "fibre_g": 2.5,
    "folate_ug": 9.0,
    "iron_mg": 1.6,
    "magnesium_mg": 47.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 145.0,
    "potassium_mg": 260.0,
    "protein_g": 5.71,
    "salt_g": 0.135,
    "sat_fat_g": 17.1,
    "sodium_mg": 54.0,
    "sugar_g": 55.7,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.77,
    "vitamin_k_ug": 19.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167947",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
