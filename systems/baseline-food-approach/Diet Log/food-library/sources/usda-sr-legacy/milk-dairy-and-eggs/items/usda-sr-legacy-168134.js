/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tbsp",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-168134",
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
      "key": "jar-nfs",
      "kind": "unit",
      "label": "jar NFS"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-heinz-strained-2-4-oz",
      "kind": "unit",
      "label": "jar Heinz Strained-2 (4 oz)"
    }
  ],
  "name": "Babyfood, dessert, blueberry yogurt, strained",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 17.0,
    "energy_kcal": 320.0,
    "fat_g": 0.7,
    "fibre_g": 0.4,
    "folate_ug": 8.0,
    "iron_mg": 0.2,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 62.0,
    "protein_g": 0.5,
    "salt_g": 0.035,
    "sat_fat_g": 0.452,
    "sodium_mg": 14.0,
    "sugar_g": 13.6,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 12.4,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 13.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168134",
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
