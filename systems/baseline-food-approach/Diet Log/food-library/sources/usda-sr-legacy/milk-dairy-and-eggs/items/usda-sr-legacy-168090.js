/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "fl-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-168090",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "bottle-nfs",
      "kind": "unit",
      "label": "bottle NFS"
    }
  ],
  "name": "Babyfood, banana juice with low fat yogurt",
  "nutritionPerBasis": {
    "calcium_mg": 79.0,
    "carbs_g": 17.5,
    "energy_kcal": 358.0,
    "fat_g": 0.8,
    "fibre_g": 0.4,
    "folate_ug": 6.0,
    "iron_mg": 0.2,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 65.0,
    "potassium_mg": 160.0,
    "protein_g": 2.5,
    "salt_g": 0.0925,
    "sat_fat_g": 0.517,
    "sodium_mg": 37.0,
    "sugar_g": 13.3,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 33.9,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168090",
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
