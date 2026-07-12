/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "jar-nfs",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-168135",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-nfs",
      "kind": "unit",
      "label": "jar NFS"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "jar-heinz-strained-2-4-25-oz",
      "kind": "unit",
      "label": "jar Heinz Strained-2 (4.25 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-beech-nut-stage-2-4-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Stage 2 (4 oz)"
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
    }
  ],
  "name": "Babyfood, dessert, banana yogurt, strained",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 17.4,
    "energy_kcal": 328.0,
    "fat_g": 0.52,
    "fibre_g": 0.5,
    "folate_ug": 7.0,
    "iron_mg": 0.14,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 100.0,
    "protein_g": 1.1,
    "salt_g": 0.035,
    "sat_fat_g": 0.37,
    "sodium_mg": 14.0,
    "sugar_g": 12.2,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 13.9,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168135",
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
