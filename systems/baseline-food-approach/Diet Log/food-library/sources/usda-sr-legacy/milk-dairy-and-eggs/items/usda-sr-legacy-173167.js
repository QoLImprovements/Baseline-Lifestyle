/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "2-scoop",
  "description": "Beverages",
  "id": "usda-sr-legacy-173167",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "2-scoop",
      "kind": "unit",
      "label": "2 scoop"
    }
  ],
  "name": "Beverages, ABBOTT, EAS whey protein powder",
  "nutritionPerBasis": {
    "calcium_mg": 256.0,
    "carbs_g": 18.0,
    "energy_kcal": 1610.0,
    "fat_g": 5.13,
    "fibre_g": 0.0,
    "folate_ug": 200.0,
    "iron_mg": 0.92,
    "magnesium_mg": 181.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 643.0,
    "potassium_mg": 564.0,
    "protein_g": 66.7,
    "salt_g": 0.9625,
    "sat_fat_g": 2.56,
    "sodium_mg": 385.0,
    "sugar_g": 5.13,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173167",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
