/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "oz-60-raisins",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168165",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-60-raisins",
      "kind": "unit",
      "label": "oz (60 raisins)"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "miniature-box-5-oz",
      "kind": "unit",
      "label": "miniature box (.5 oz)"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "small-box-1-5-oz",
      "kind": "unit",
      "label": "small box (1.5 oz)"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "50-raisins",
      "kind": "unit",
      "label": "50 raisins"
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
  "name": "Raisins, dark, seedless (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 79.3,
    "energy_kcal": 1250.0,
    "fat_g": 0.25,
    "fibre_g": 4.5,
    "folate_ug": 5.0,
    "iron_mg": 1.79,
    "magnesium_mg": 36.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 98.0,
    "potassium_mg": 744.0,
    "protein_g": 3.3,
    "salt_g": 0.065,
    "sat_fat_g": 0.094,
    "sodium_mg": 26.0,
    "sugar_g": 65.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168165",
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
