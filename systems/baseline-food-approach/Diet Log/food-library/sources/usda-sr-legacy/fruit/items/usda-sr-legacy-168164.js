/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-not-packed",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168164",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "cup-not-packed",
      "kind": "unit",
      "label": "cup (not packed)"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "cup-packed",
      "kind": "unit",
      "label": "cup, packed"
    }
  ],
  "name": "Raisins, golden, seedless",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 80.0,
    "energy_kcal": 301.0,
    "fat_g": 0.2,
    "fibre_g": 3.3,
    "folate_ug": 3.0,
    "iron_mg": 0.98,
    "magnesium_mg": 35.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 101.0,
    "potassium_mg": 746.0,
    "protein_g": 3.28,
    "salt_g": 0.06,
    "sat_fat_g": 0.065,
    "sodium_mg": 24.0,
    "sugar_g": 65.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168164",
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
