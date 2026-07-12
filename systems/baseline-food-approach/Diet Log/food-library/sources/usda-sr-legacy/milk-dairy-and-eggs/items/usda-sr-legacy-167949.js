/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz-crunchy-about-21-pieces",
  "description": "Snacks",
  "id": "usda-sr-legacy-167949",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-crunchy-about-21-pieces",
      "kind": "unit",
      "label": "oz crunchy (about 21 pieces)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-puffs-about-13-pieces",
      "kind": "unit",
      "label": "oz puffs (about 13 pieces)"
    }
  ],
  "name": "Snacks, corn-based, extruded, puffs or twists, cheese-flavor",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 54.5,
    "energy_kcal": 2370.0,
    "fat_g": 36.5,
    "fibre_g": 0.8,
    "folate_ug": 80.0,
    "iron_mg": 1.69,
    "magnesium_mg": 18.0,
    "omega3_g": 0.5,
    "phosphorus_mg": 126.0,
    "potassium_mg": 180.0,
    "protein_g": 5.46,
    "salt_g": 2.32,
    "sat_fat_g": 3.75,
    "sodium_mg": 928.0,
    "sugar_g": 3.57,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 4.18,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167949",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "milk-dairy-and-eggs",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
