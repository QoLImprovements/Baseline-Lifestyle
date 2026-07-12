/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-25-cup",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171360",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.2,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    },
    {
      "gramsPerUnit": 223.0,
      "key": "box",
      "kind": "unit",
      "label": "box"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    },
    {
      "gramsPerUnit": 3.2,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Babyfood, cereal, oatmeal, dry fortified",
  "nutritionPerBasis": {
    "calcium_mg": 1160.0,
    "carbs_g": 73.5,
    "energy_kcal": 1650.0,
    "fat_g": 6.36,
    "fibre_g": 7.3,
    "folate_ug": 247.0,
    "iron_mg": 64.1,
    "magnesium_mg": 110.0,
    "omega3_g": 0.057,
    "phosphorus_mg": 506.0,
    "potassium_mg": 549.0,
    "protein_g": 11.0,
    "salt_g": 0.0525,
    "sat_fat_g": 0.841,
    "sodium_mg": 21.0,
    "sugar_g": 11.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 12.2,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171360",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
