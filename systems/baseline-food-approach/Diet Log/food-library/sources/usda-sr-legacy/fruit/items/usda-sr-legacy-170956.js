/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "tbsp",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170956",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-gerber-second-food-4-oz",
      "kind": "unit",
      "label": "jar Gerber Second Food (4 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-nfs",
      "kind": "unit",
      "label": "jar NFS"
    }
  ],
  "name": "Babyfood, fruit, bananas with apples and pears, strained",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 19.3,
    "energy_kcal": 347.0,
    "fat_g": 0.22,
    "fibre_g": 1.4,
    "folate_ug": 5.0,
    "iron_mg": 0.3,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 233.0,
    "protein_g": 0.9,
    "salt_g": 0.005,
    "sat_fat_g": 0.106,
    "sodium_mg": 2.0,
    "sugar_g": 12.8,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 13.9,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170956",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
