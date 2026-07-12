/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "pomegranate-4-dia",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169134",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 282.0,
      "key": "pomegranate-4-dia",
      "kind": "unit",
      "label": "pomegranate (4\" dia)"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "0-5-cup-arils-seed-juice-sacs",
      "kind": "unit",
      "label": "0.5 cup arils (seed/juice sacs)"
    }
  ],
  "name": "Pomegranates, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 18.7,
    "energy_kcal": 346.0,
    "fat_g": 1.17,
    "fibre_g": 4.0,
    "folate_ug": 38.0,
    "iron_mg": 0.3,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 236.0,
    "protein_g": 1.67,
    "salt_g": 0.0075,
    "sat_fat_g": 0.12,
    "sodium_mg": 3.0,
    "sugar_g": 13.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 10.2,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 16.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169134",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
