/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "3-enchilada",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169854",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 343.0,
      "key": "3-enchilada",
      "kind": "unit",
      "label": "3 enchilada"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "2-enchilada",
      "kind": "unit",
      "label": "2 enchilada"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "enchilada",
      "kind": "unit",
      "label": "enchilada"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "serving-serving-size-varied-from-1-to-3-enchiladas",
      "kind": "unit",
      "label": "serving serving size varied from 1 to 3 enchiladas"
    }
  ],
  "name": "ON THE BORDER, cheese enchilada",
  "nutritionPerBasis": {
    "calcium_mg": 293.0,
    "carbs_g": 16.2,
    "energy_kcal": 1130.0,
    "fat_g": 17.7,
    "fibre_g": 1.8,
    "folate_ug": 14.0,
    "iron_mg": 0.71,
    "magnesium_mg": 30.0,
    "omega3_g": 0.202,
    "phosphorus_mg": 288.0,
    "potassium_mg": 176.0,
    "protein_g": 11.7,
    "salt_g": 1.4025,
    "sat_fat_g": 7.52,
    "sodium_mg": 561.0,
    "sugar_g": 2.89,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169854",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "milk-dairy-and-eggs",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
