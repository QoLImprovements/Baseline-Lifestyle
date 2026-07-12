/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "packet-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174638",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "packet-1-nlea-serving",
      "kind": "unit",
      "label": "packet (1 NLEA serving)"
    }
  ],
  "name": "Cereals, QUAKER, Instant Oatmeal, Banana Bread, dry",
  "nutritionPerBasis": {
    "calcium_mg": 277.0,
    "carbs_g": 75.7,
    "energy_kcal": 1540.0,
    "fat_g": 4.85,
    "fibre_g": 6.7,
    "folate_ug": 247.0,
    "iron_mg": 10.1,
    "magnesium_mg": 92.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 315.0,
    "potassium_mg": 287.0,
    "protein_g": 8.97,
    "salt_g": 1.75,
    "sat_fat_g": 0.9,
    "sodium_mg": 700.0,
    "sugar_g": 29.4,
    "vitamin_a_ug": 2680.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174638",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
