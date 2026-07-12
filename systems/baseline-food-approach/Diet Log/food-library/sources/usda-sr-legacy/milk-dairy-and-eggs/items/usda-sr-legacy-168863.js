/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-168863",
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
  "name": "Snacks, tortilla chips, low fat, made with olestra, nacho cheese",
  "nutritionPerBasis": {
    "calcium_mg": 128.0,
    "carbs_g": 65.2,
    "energy_kcal": 1330.0,
    "fat_g": 3.53,
    "fibre_g": 6.4,
    "folate_ug": 16.0,
    "iron_mg": 4.8,
    "magnesium_mg": 99.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 245.0,
    "potassium_mg": 396.0,
    "protein_g": 8.44,
    "salt_g": 1.7625,
    "sat_fat_g": 1.05,
    "sodium_mg": 705.0,
    "sugar_g": 2.82,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 5.5,
    "vitamin_e_mg": 3.53,
    "vitamin_k_ug": 192.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168863",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "milk-dairy-and-eggs",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
