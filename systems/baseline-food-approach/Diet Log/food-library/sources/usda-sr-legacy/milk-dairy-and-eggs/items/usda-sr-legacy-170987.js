/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170987",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "container",
      "kind": "unit",
      "label": "container"
    }
  ],
  "name": "Babyfood, yogurt, whole milk, with fruit, multigrain cereal and added DHA fortified",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 13.2,
    "energy_kcal": 411.0,
    "fat_g": 3.53,
    "fibre_g": 0.3,
    "folate_ug": 8.0,
    "iron_mg": 0.15,
    "magnesium_mg": 15.0,
    "omega3_g": 0.085,
    "phosphorus_mg": 95.0,
    "potassium_mg": 149.0,
    "protein_g": 3.4,
    "salt_g": 0.1025,
    "sat_fat_g": 1.84,
    "sodium_mg": 41.0,
    "sugar_g": 11.5,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170987",
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
