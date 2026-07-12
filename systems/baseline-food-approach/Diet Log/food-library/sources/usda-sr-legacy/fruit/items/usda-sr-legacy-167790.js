/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-thawed",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167790",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "cup-thawed",
      "kind": "unit",
      "label": "cup thawed"
    }
  ],
  "name": "Naranjilla (lulo) pulp, frozen, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 5.9,
    "energy_kcal": 25.0,
    "fat_g": 0.22,
    "fibre_g": 1.1,
    "folate_ug": 3.0,
    "iron_mg": 0.35,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 200.0,
    "protein_g": 0.44,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 3.74,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 14.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167790",
  "state": "Frozen",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "frozen",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
