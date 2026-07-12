/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "2-tbsp-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171653",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "2-tbsp-1-nlea-serving",
      "kind": "unit",
      "label": "2 tbsp (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, SUN COUNTRY, KRETSCHMER Honey Crunch Wheat Germ",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 58.1,
    "energy_kcal": 372.0,
    "fat_g": 7.78,
    "fibre_g": 10.2,
    "folate_ug": 606.0,
    "iron_mg": 8.05,
    "magnesium_mg": 272.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1010.0,
    "potassium_mg": 964.0,
    "protein_g": 26.6,
    "salt_g": 0.0275,
    "sat_fat_g": 1.36,
    "sodium_mg": 11.0,
    "sugar_g": 21.4,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 5.5,
    "vitamin_e_mg": 19.3,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171653",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "grains-bread-and-pasta",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
