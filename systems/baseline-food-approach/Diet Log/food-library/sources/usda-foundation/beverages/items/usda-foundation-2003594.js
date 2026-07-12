/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "Fruits and Fruit Juices",
  "id": "usda-foundation-2003594",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cranberry juice, not fortified, from concentrate, shelf stable",
  "nutritionPerBasis": {
    "calcium_mg": 6.64,
    "carbs_g": 7.26,
    "energy_kcal": 32.1,
    "fat_g": 0.338,
    "fibre_g": 0.0,
    "folate_ug": 8.97,
    "iron_mg": 0.126,
    "magnesium_mg": 4.38,
    "omega3_g": 0.0,
    "phosphorus_mg": 3.3,
    "potassium_mg": 70.6,
    "protein_g": 0.0,
    "salt_g": 0.01585,
    "sat_fat_g": 0.0,
    "sodium_mg": 6.34,
    "sugar_g": 3.41,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2003594",
  "state": "Unspecified",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "fruits-and-fruit-juices",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
