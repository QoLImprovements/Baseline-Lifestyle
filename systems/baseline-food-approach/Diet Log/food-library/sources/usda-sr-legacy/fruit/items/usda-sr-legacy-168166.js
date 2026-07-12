/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-packed",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168166",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "cup-packed",
      "kind": "unit",
      "label": "cup, packed"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "cup-not-packed",
      "kind": "unit",
      "label": "cup (not packed)"
    }
  ],
  "name": "Raisins, seeded",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 78.5,
    "energy_kcal": 1240.0,
    "fat_g": 0.54,
    "fibre_g": 6.8,
    "folate_ug": 3.0,
    "iron_mg": 2.59,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 75.0,
    "potassium_mg": 825.0,
    "protein_g": 2.52,
    "salt_g": 0.07,
    "sat_fat_g": 0.178,
    "sodium_mg": 28.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168166",
  "state": "Unspecified",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
