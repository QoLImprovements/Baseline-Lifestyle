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
  "id": "usda-sr-legacy-168091",
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
  "name": "Babyfood, mixed fruit juice with low fat yogurt",
  "nutritionPerBasis": {
    "calcium_mg": 81.0,
    "carbs_g": 14.7,
    "energy_kcal": 74.0,
    "fat_g": 0.8,
    "fibre_g": 0.4,
    "folate_ug": 6.0,
    "iron_mg": 0.2,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 137.0,
    "protein_g": 2.4,
    "salt_g": 0.09,
    "sat_fat_g": 0.517,
    "sodium_mg": 36.0,
    "sugar_g": 10.8,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 33.9,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168091",
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
