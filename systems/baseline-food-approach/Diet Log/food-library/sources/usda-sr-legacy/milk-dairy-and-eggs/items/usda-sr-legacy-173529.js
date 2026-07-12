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
  "id": "usda-sr-legacy-173529",
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
  "name": "Babyfood, cereal, mixed, prepared with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 220.0,
    "carbs_g": 12.3,
    "energy_kcal": 402.0,
    "fat_g": 3.38,
    "fibre_g": 0.8,
    "folate_ug": 9.0,
    "iron_mg": 10.4,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 118.0,
    "potassium_mg": 166.0,
    "protein_g": 4.14,
    "salt_g": 0.105,
    "sat_fat_g": 1.74,
    "sodium_mg": 42.0,
    "sugar_g": 4.78,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173529",
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
